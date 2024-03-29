---
title: "A Small Example of the Typeclass Pattern"
date:  2012-05-03 00:00:00 +0000
permalink: /posts/2012-05-03/typeclasses
description: "A small example of what typeclasses are in scala and how to use them."
categories: 
  - scala
  - programming
tags:
  - scala
  - programming
  - typeclass
---

Typeclasses are most famously a [language feature](http://learnyouahaskell.com/types-and-typeclasses#typeclasses-101) of Haskell that has gained interest in the Scala community. Here I describe the basic pattern with references for further study.

## What is a type class and why do I need it?

> Type classes are useful to solve several fundamental challenges in Programming and programming languages. In particular type classes support retroactive extension: the ability to extend existing software modules with new functionality without needing to touch or re-compile the original source.

The Scala library includes a few typeclasses such as scala.math.Numeric and scala.math.Ordering.

Scala enables the typeclass pattern using traits and implicits, and whilst Scala's implementation is more verbose than Haskell's, it comes with greater flexibility. Haskell only allows a single typeclass instance globally, whereas Scala allows any number to be available.

Furthermore, Scala allows default implementations to be made available if no others can be found.

For a deeper understanding see the references at the bottom of the blog.

## Show me the code!

(You can copy and paste this into your favourite IDE)

```scala
/* Here is the first piece of the Scala typeclass puzzle,
 * its just a trait. The trait defines a concept which in
 * this case is a transformer that transforms a type T
 * into an R. */
trait Transformer[T, R] {
  def transform(t: T): R
}
```

```scala
/* This is a companion object for the typeclass giving default
 * implementations for the typeclass. These implementations
 * are found after local implicits, so you can still override the
 * default behaviour. For more about the search order see [3]. */
object Transformer {
  implicit object IntToStringTransformer
          extends Transformer[Int, String] {
    def transform(t: Int) = t.toString
  }

  /* This one is interesting. It transforms a List[T]
   * into a String, but to do that it needs a transformer for
   * T to String. So it requires such a transformer implicitly. */
  implicit def ListToStringTransformer[T](
                 implicit tToString: Transformer[T, String]) =
    new Transformer[List[T], String] {
      def transform(t: List[T]) =
        t.map(tToString.transform(_)).mkString(",")
    }
}
```

Now to use the type class.

```scala
// This is something that makes use of the typeclass
trait Transform {
  // The implicit Transformer, transformer, supplies an
  // appropriate transformer for the method
  def transform[T, R](t: T)(
        implicit transformer: Transformer[T, R]): R =
    transformer.transform(t)
}
```

```scala
// These examples will drop back to the default implementations
// in the Transformer's companion object
object ExampleWithDefaults extends App with Transform {
  println(transform(2)) // prints 2
  println(transform(List(1, 2, 3))) // prints 1,2,3
}

// I want my own special transformers!
object ExampleWithMyTransformers extends App with Transform {

  implicit object MyIntToXmlTransformer
          extends Transformer[Int, xml.Node] {
    def transform(t: Int) = <aNumber>{ t.toString }</aNumber>
  }

  // As with the default List transformer, this one needs
  // a transformer of T to Node so that it can perform the
  // transform for lists.
  implicit def MyListToXmlTransformer[T](
                 implicit transformer: Transformer[T, xml.Node]) =
    new Transformer[List[T], xml.NodeSeq] {
      import xml._
      def transform(t: List[T]): NodeSeq =
        t.foldLeft(NodeSeq.Empty) { (accumulator, next) =>
          accumulator ++ transformer.transform(next)
        }
    }

  println(transform(2)) // prints 2
  println(transform(List(1, 2, 3))) // prints 123

  // Here is a transformer from Boolean to String
  implicit object BooleanToStringTransformer
          extends Transformer[Boolean, String] {
    def transform(b: Boolean) = b.toString
  }

  // This is the clever bit.
  // Now we can now transform List[Boolean] to String.
  // The List transformer defined in the default Transformer trait
  // will be used but with the new BooleanToStringTransformer. So
  // the default transformers and the new ones work together.
  println(transform(List(true, false))) // prints true,false

  // Finally, if there are no implicits available then the code
  // fails to compile.
  // transform("3")
}
```

## Summary

So we defined a typeclass which has been extended with new instances. If the transformer typeclass were part of a library, we can retroactively extend the library with new behaviour supporting new types not originally conceived of in the library. Furthermore, the library supplied types and the new ones work together perfectly.

## Further Study

1. [Type Classes as Objects and Implicits](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.176.5300&rep=rep1&type=pdf); Bruno C. d. S. Oliveira, Adriaan Moors, Martin Odersky
2. [How to make ad-hoc polymorphism less ad-hoc"; Philip Wadler, Stephen Bolt, (POPL '89)](http://homepages.inf.ed.ac.uk/wadler/papers/class/class.ps)
3. [Implicit resolution order](http://stackoverflow.com/a/5598107/434405/)
4. [Tutorial: Typeclass with Dan Rosen](http://www.youtube.com/watch?v=sVMES4RZF-8)
5. [Scala/Haskell: A simple example of type classes by Mark Needham](http://www.markhneedham.com/blog/2012/05/22/scalahaskell-a-simple-example-of-type-classes/)

