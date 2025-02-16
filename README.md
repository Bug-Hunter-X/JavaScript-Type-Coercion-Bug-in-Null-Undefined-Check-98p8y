# JavaScript Type Coercion Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to type coercion when comparing null and undefined values.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides the corrected version.  The bug stems from using the loose equality operator (`==`) instead of strict equality (`===`).

## Bug Description

The original code attempts to handle null or undefined inputs by checking `a == null || b == null`. However, this check is flawed because `null == 0` evaluates to true due to JavaScript's type coercion. Therefore, if either `a` or `b` is null, the function returns 0 even if it was intended to only return 0 if both are null or undefined. This may lead to incorrect results.

## Solution

The solution uses the strict equality operator (`===`) to avoid type coercion.  This ensures that the function returns 0 only when both `a` and `b` are explicitly null or undefined.