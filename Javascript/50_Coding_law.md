## LAWS ##

Refer from: link [https://medium.com/@alexobidiegwu/50-laws-of-best-practices-in-python-6942c7cafd56]

- Law1: Avoid comments at all cost.
- Law2: Do not use type attributes as A Name for variables. 
use: `name_of_varaible:str = value`
- Law3: Class Names should be nouns. 
use: `Goat.get_horn_length()` instead of `GetGoat.get_horn_length()`
- Law4: Function names should be verbs. 
- Law5: Function should specify The parameter and Return Type. 
```javascript
Bad Practice

const convert_to_string(num): 
    return "My new string is " + str(num)
```

```javascript
const convert_to_string(num: int) -> str: 
    return "My new string is" + str(num)
```
- Law6: Function must perform one functionality only. 
```javascript
const check_if_address_is_valid(address): 
    if address.is_valid: 
        latitude: address.getLaititude();
        longitude: address.getLongitude();

        return (latitude, longitude)
```

```javascript
here is the better way
const check_if_address_is_valid(address): 
    return address.is_valid:

const get_latitude(): 
    latitude = address.getLatitude();
    return latitude

const get_Longitude(): 
    longitude = address.getLongitude();
```