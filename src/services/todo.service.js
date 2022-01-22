export function getAllTodos(){
  if (localStorage.getItem('todos')) {
    return JSON.parse(localStorage.getItem('todos'))
  } else {
    return []
  }
  // return [
  //   {
  //     id:1,
  //     date:"2022-01-19T21:23:02.439Z",
  //     title:"Go to supermarket",
  //     status:"new"
  //   },
  //   {
  //     id:2,
  //     date:"2022-01-18T21:23:02.439Z",
  //     title:"Start reading The lord of the ring",
  //     status:"new"
  //   },
  //   {
  //     id:3,
  //     date:"2022-01-16T21:23:02.439Z",
  //     title:"Study React Hooks",
  //     status:"doing"
  //   },
  //   {
  //     id:4,
  //     date:"2022-01-15T21:23:02.439Z",
  //     title:"Clean guitars",
  //     status:"done"
  //   },
  //   {
  //     id:5,
  //     date:"2022-01-15T21:23:02.439Z",
  //     title:"Buy new book for weekend",
  //     status:"done"
  //   }
  // ]
}


