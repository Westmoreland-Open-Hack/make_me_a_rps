### Explore the Random Number Generator

Assuming your language has a Random or PseudoRandom number generator we are going to try and write a small program that accomplishes the goal of printing to your shell a random number.

### Wait What? (How do I start?)
1. Reserch with your search engine of choice some things like this
    `<Your Language> [Pseudo]random [example]`

    If you end up on `StackOverflow` read the accepted answer and the comments below. There is a wealth of information hidden down there

2. Once you have a sample in hand and some well earned knowledge time to give it a try.
3. Attempt to replicate this Pseudo Logic in you language of choice

    ```
    random = RandomNumberGenerator.random
    print "This is a random number ", random
    ```
    ```
    The output should read something like:
    This is a random number 8
    OR
    This is a random number 0.120023
    ```

4. With success under your belt let make the program do it a few more times with a loop following this Pseudo Logic

    ```
    loop 3 times
      random = RandomNumberGenerator.random
      print "This is a random number ", random
    end
    ```
    ```
    The output should read something like:
    This is a random number 8
    This is a random number 3
    This is a random number 1
    OR
    This is a random number 0.120023
    This is a random number 1.023
    This is a random number 0.933
    ```

5. Didn't that feel great! Now one last thing. Lets extract our loop body into a function

    ```
    function makeRandom
      random = RandomNumberGenerator.random
      print "This is a random number ", random
    end
    loop 3 times
      makeRandom
    end
    ```
    ```
    The output should be similar to the last step except the number may be different
    ```

### What have we done
If you have successfully completed these steps you have a great grounding in your language. You know how to include an external library or call a Class. You can write a loop and make a function.

##### Take a break and then move on to step two where we start working with data
