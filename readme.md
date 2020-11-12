# You can run this project by following steps

1. Git Clone the repository
2. yarn install
3. yarn start

# Here is the sample search query

You can use Postman to find the cats

Example Query:

http://localhost:8000/cats?breed=Lykoi&patterns[]=Ticked&countries[]=France&origin=Hybrid&coats[]=Short&offset=0&limit=2

Query Params

1. `breed` (optional), type: `string` : the cat that includes the query breed will have priorities in the response
2. `countries` (optional), type: `string[]` : the cat that is living in those countreis will have priorities in the response
3. `origin` (optional), type: `string` : the cat that includes the query `origin` will have priorities in the response
4. `coats` (optional), type: `string[]` : the cat that includes the coat will have priority in the response
5. `patterns` (optional), type: `string[]` : the cat that includes the pattern will have some priorities in the response
6. `offset` (optional), type: `number` : We will get the result from a certain offset ( thi will be useful for the FE to display the data in pagination )
7. `limit` (optional), type: `number` : We will only return the limited results. the default limit will be 10.

---

If the countries, patterns, coats is set as `All` in the query, then we will give all the cats additional similiarity `1`.

# Possible improvements

1. We can add the only single text search functionality
   like we can use this query method: `http://localhost:8000/cats?search=Lykoi in United States`
   : In this case, we need to think more effective algorithm finding certain keys in the text, and based on that, we will perform the search
2. We can improve the search algorithm
   The logic in `findMatches` function at CatModel will be changed accordingly

# Missing points that I haven't implemented

When I looked over the data rougly, I thought the country in the json is a country name.

But I found that it could become the description or explanation of the cat.

So I definitely agree that in the query, we need to set the countries as `string` rather than `string[]`

Thanks,

Please let me know if you have other questions.

James Conway
