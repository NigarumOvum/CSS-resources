# Pressable, iOS Compatible CSS Button

A Pen created on CodePen.io. Original URL: [https://codepen.io/jemware/pen/kPoYbe](https://codepen.io/jemware/pen/kPoYbe).

A 'pressable' CSS button that is still pressable on mobile safari.

The secret is having ontouchstart="" set in a containing element, allowing the :active pseudo-class to work; the body tag is fine.

I am pretty sure this won't work on Android, but I don't have a device to test on.