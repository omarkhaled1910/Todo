import { v4 as uuidv4 } from 'uuid';

export const TODO_OPTIONS= [

    {
        id:1,
        option:"To-do"
    },

    {
        id:2,
        option:"In Progress"

    },
    {
        id:3,
        option:"Done"
    },

]

export const COLUMNS= {
    [uuidv4()]: {
      color:"rgb(255 207 207)",
      title: 'To-do',
      type: 1,
      items: [
        {
          status: 1,
          name: "First task",
          id:uuidv4()

        },
        {
          status: 1,
          name: "second task",
          id:uuidv4()
        },
        {
          status: 1,
          name: "third task",
          id:uuidv4()
        },
      ],
    },
    [uuidv4()]: {
      color:"#cfedff",
      title: 'In Progress',
      type: 2,
      items: [
       
      ],
    },
    [uuidv4()]: {
      color:"rgb(207 255 208)",
      title: 'Done',
      type: 3,
      items: [
        
      ],
    },
  } ;