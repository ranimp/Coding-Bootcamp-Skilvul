1. Relasi yang diperlukan adalah _one to one_. Berikut skema nya :

```
{
    "_id" : ObjectId('AAA'),
    "full_name" : "Rani Meliyana Putri",
    "email" : "rani@mail.com",
    "phone_number" : "0987654321"
}
```

2. Relasi yang diperlukan adalah _one to few_. Berikut skema nya :

```
{
    "_id" : ObjectId('AAA'),
    "full_name" : "Rani Meliyana Putri",
    "phone_number" : "0987654321",
    "addresses" : [
        {"street" : "jl. gunung 4", "city": "balikpapan", "country":"indonesia"},
        {"street" : "jl. soekarno hatta km.15", "city": "balikpapan", "country":"indonesia"},
    ]
}
```

3. Relasi yang diperlukan adalah _one to many_. Berikut skema nya :

```
// product
{
    "name" : "Kaos Polos",
    "brand" : "Gucci",
    "catalog" : ["ObjectId('AAA')", "ObjectId('BBB')", "ObjectId('CCC')"]
}

// variant 1
{
    "_id" : ObjectId('AAA'),
    "name" : "kaos polos hitam",
    "color" : "hitam",
    "qty" : "12",
    "price" : "99000"
}

// variant 2
{
    "_id" : ObjectId('BBB'),
    "name" : "kaos polos navy",
    "color" : "navy",
    "qty" : "10",
    "price" : "99000"
}
```

4. Relasi yang diperlukan adalah _many to many_. Berikut skema nya :

```
// cinema
{
    "_id" : ObjectId('AA1'),
    "name" : "CGF",
    "location" : "Pondok Indah Mall",
    "film" : [ObjectId('BB1'), ObjectId('BB2')]
}
{
    "_id" : ObjectId('AA2'),
    "name" : "Cinema31",
    "location" : "Mall Kelapa Gading",
    "film" : [ObjectId('BB1'), ObjectId('BB2')]
}

// film
{
    "_id" : ObjectId('BB1'),
    "name" : "Venom 2",
    "cinema" : [ObjectId('AA1'), ObjectId('AA2')]
}
{
    "_id" : ObjectId('BB2'),
    "name" : "Spiderman No Way Home",
    "cinema" : [ObjectId('AA1'), ObjectId('AA2')]
}
```
