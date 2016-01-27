# underscore_u
Underscore "u" (_u.) a JavaScript library that provides a whole mess of useful functional programming for writting API code for VTT platforms.

**_u.alog(text, optional_label)**<br>
Sends a "log" ( log([value]) ) to the API Output Console. Advantage is the script should only have one "log" which will return a "Undeclared 'log'" error in JSLint only once. Useful way to ensure all logs used for debugging are removed from the final script. **text** is required but the **label** is optional.
> _u.alog(obj.get('left'))<br>=> 105

or

> _u.alog(obj.get('left'),'left')<br>=> left: 105

**_u.bound(number,lowerlimit,upperlimit,[integer true, false])**<br>
Used restrict a number to a lower and upper range. Many uses in RPG applications (prevent over healing of hit points) or canvas applications (prevent a script from moving a token outside the canvas edges.) Optional true/false for **integers.** Cares for input errors as follows:
null => 0
undefined => 0
NaN => 0
false => 0
true => 1

> _u.bound(-5.5,0,10)<br>=> -5.5

or

> _u.bound(50.5,0,10,true)<br>=> 56
