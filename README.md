# underscore_u
underscore "u" (_u.) a JavaScript library that provides a whole mess of useful functional programming for writting API code for VTT

**_u.alog(text,optional label)**
sends a "log" to the API Output Console. Advantage is the script should only have one "log" which will return a "Undeclared 'log'" error in JSLint only once. Useful way to ensure all logs used for debuggin are removed from the final script.
> _u.alog(obj.get('left'))...
> => 105


> _u.alog(obj.get('left'),'left')

> => 105
