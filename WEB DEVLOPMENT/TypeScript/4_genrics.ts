// generics like cpp generics that allow any type
// we know we can use 'any' but generics not forget type data

function printanything <t> (data: t)
{
    console.log(data);
     
}

printanything([1,2,3])
printanything("hello my name is md ahsan ahmad and my father name is md razi ahmad")