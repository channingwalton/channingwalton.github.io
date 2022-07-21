---
title: "Another Small Example of the Type Class Pattern"
date:  2012-07-09 00:00:00 +0000
permalink: /posts/2012-07-09/typeclass
description: "This is another simple example of the typeclass pattern in scala."
categories: 
  - scala
  - programming
tags:
  - scala
  - programming
  - typeclass
---

I recently came across another elegant use of the type class pattern, so I thought I'd share it with here.

Developers at a client recently asked about the following code:

```scala
import scalaz._
import Scalaz._
val x: Option[Int] = whatever
val y = ~x // Huh!?
```

## What is that `~x` there?

It's a *unary method call*.

An example of a unary method is `-`, as in `-1`. `-` is actually defined in `scala.Numeric` like this:

```scala
def unary_-() = negate(lhs)
```

So `-1` is actually `1.unary_-`. The unary_ part can be omitted when used in prefix form. Note that the only identifiers that can be used as prefix operators are +, -, !, and ~.

So the answer to the question is: its a unary method defined … somewhere:

```scala
def unary_~()
```

## What does `~` do to options?

In [Scalaz](http://code.google.com/p/scalaz/) it is a method that returns the value contained in an Option, or a default `Zero` for the Option's type. For example, `~Some(1)` returns 1, `~None` (for an Option[Int]) will return 0.

But how does our unary method find an appropriate Zero instance?

To the code …

```scala
object Zeroes extends App {

/* The type class pattern starts with a trait defining the
 * behaviour we need. In this case, a Zero for some type T,
 * that can provide the zero for that type.
 */
trait Zero[T] { def zero: T }

/* The other half of the pattern is the trait's companion
 * object which contains a set of implicit instances
 * for the type class. Whenever an implicit instance
 * of a Zero is required, the companion object is one of
 * the last places searched.
 *
 * In this case there is only an instance for Int but it
 * could contain instances for all the basic types.
 */
object Zero {
  implicit object IntZero extends Zero[Int] { def zero = 0 }
}

/* So that's the type class, but scala's Option does not have
 * the method we need, so lets enrich the Option type with an
 * implicit conversion (view) to a new, anonymous type with
 * the method we need.
 */
implicit def withTheZeroes[T: Zero](option: Option[T]) = new {
  /* Note that the T: Zero in the type parameter is called a context
   * bound. It says that this method wants an implicit instance
   * of Zero[T] which will be used below.
   */

  /* The method will use Option's getOrElse method to get the
   * value if the option is a Some, or else return the value
   * returned by the Zero[T] if the Option is a None.
   */
  def unary_~(): T = option.getOrElse( implicitly[Zero[T.zero]] )

  /* The implicitly here is just a method in scala.Predef
   *
   *   def implicitly[T](implicit e: T) = e
   *
   *   The comment says:
   *     "for summoning implicit values from the nether world"
   *
   * In other words, it's a method that requires an implicit
   * instance of the supplied type, in this case Zero[T] and
   * returns it. Since withTheZeroes requires an implicit
   * instance of Zero[T] through the context bound discussed
   * above, implicitly[Zero[T will find it.
   */
  }

// ok lets try it out with a standard scala Option
val something = Some(1)
val nada: Option[Int] = None

println(~something) // returns 1
println(~nada) // returns 0

/* But there is more. Type classes are open to extension.
 * We can supply our own zero, either superseding those
 * supplied by the Zero companion object, or add new ones.
 *
 * Here is one for a String.
 */
implicit object StringZero extends Zero[String] { def zero = "" }
val noString: Option[String] = None
println(~noString) // returns an empty string
}
```

So there it is, a unary method enriching an Option via an implicit view which requires an implicit Zero instance for the Option's enclosed type.

Scalaz provides all the machinery to do this so all you need to do is use it. If you need to modify the defaults then you can provide your own implicit Zero instances and import them. The implicit resolution rules will ensure that your instances will be found before the defaults if they are imported or placed in the companion object of your classes.

If you want to learn more about this kind of thing have a look at the other blogs in this series of Small Examples.

If you would like a course on Scala, look no further than [Underscore](https://underscore.io).

