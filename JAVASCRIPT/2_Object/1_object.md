<!-- 
    #object 
    -> a javascript object is an entiyy having state & behaviour (propertie & method). like care , pen , person
    -> javascript is an object-based language  , evrthing is an object in javascript.
    -> javascript is template based not class based. here, we don't create class to get the object but , we directly create objects.


    #three way to create object
    1.by object literal
    2.by creating instance of object directly 
    3.By using an object constructor 
    
    #Object  methods
   S.No	Methods	Description
1	Object.assign()	--This method is used to copy enumerable and own properties from a source object to a target object
2	Object.create()--	This method is used to create a new object with the specified prototype object and properties.
3	Object.defineProperty() --	This method is used to describe some behavioral attributes of the property.
4	Object.defineProperties() --	This method is used to create or configure multiple object properties.
5	Object.entries()	--This method returns an array with arrays of the key, value pairs.
6	Object.freeze()	-- This method prevents existing properties from being removed.
7	Object.getOwnPropertyDescriptor() ---	This method returns a property descriptor for the specified property of the specified object.
8	Object.getOwnPropertyDescriptors() ---	This method returns all own property descriptors of a given object.
9	Object.getOwnPropertyNames()---- This method returns an array of all properties (enumerable or not) found.
10	Object.getOwnPropertySymbols()--- This method returns an array of all own symbol key properties.
11	Object.getPrototypeOf()	--- This method returns the prototype of the specified object.
12	Object.is()	--- This method determines whether two values are the same value.
13	Object.isExtensible() ---	This method determines if an object is extensible
14	Object.isFrozen()	--- This method determines if an object was frozen.
15	Object.isSealed()	--- This method determines if an object is sealed.
16	Object.keys()	--- This method returns an array of a given object's own property names.
17	Object.preventExtensions()	-- This method is used to prevent any extensions of an object.
18	Object.seal()	--- This method prevents new properties from being added and marks all existing properties as non-configurable.
19	Object.setPrototypeOf() ---	This method sets the prototype of a specified object to another object.
20	Object.values()	--- This method returns an array of values.

-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>object</title>
  </head>
  <body>
    <script>
      ///////1.by object literal/////////////////
      let p1 = {
        name: "asif",
        age: 18,
        print: function () {
          console.log("hello brother " + this.name);
        },
      };

      p1.print();
      /////////2.by creating instance of object directly////////////////
      let p2 = new Object();
      p2.name = "fazil";
      p2.age = 20;
      p2.print = function () {
        console.log("hello brpther " + this.name);
      };
      p2.print();
      ////////////3.by using an object constructor /////////////
      function person(name, age) {
        this.name = name;
        this.age = age;
        this.naame;
        this.print = function () {
          console.log("hello brother " + this.name);
        };
      }

      let p3 = new person("ahsan", 19);
      p3.print();
      /////////////////exmaple of a Object method//////////

      const d = Object.getOwnPropertyDescriptors(p3);
      console.log();
    </script>
  </body>
</html>
