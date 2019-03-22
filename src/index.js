/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) 

{
  let Count = 0;

  for(let i = 0; i < preferences.length; i++)
  {
    let First = preferences[i],
    Second = preferences[First-1],
    Third = preferences[Second-1];

    if(Third === i + 1 && Second != i + 1)
   
    {
      Count ++ ;
      delete preferences[i];
      delete preferences[First - 1];
      delete preferences[Second - 1];
    }
  }

  return Count;
};