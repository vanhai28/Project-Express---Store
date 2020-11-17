const numPagePerPagination = 4;
MAX_NUMBER_PAGE = 9; //this is got by API

module.exports.listBook = () => {
  return [
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "How They Get There",
      old_cost: "$65.09",
      current_cost: "$41.93",
      ID_book: "2e1af12170685960ec9e8cec416db0d0",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Flight from Death: The Quest for Immortality",
      old_cost: "$57.46",
      current_cost: "$40.01",
      ID_book: "82dd1b26412445dc73a0d15fb23ce34e",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Swing",
      old_cost: "$53.11",
      current_cost: "$41.88",
      ID_book: "b8dad003e704ae11d44f4271dd2d648f",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Story of Floating Weeds, A (Ukikusa monogatari)",
      old_cost: "$53.69",
      current_cost: "$49.87",
      ID_book: "9b4b60dc39267a511c96ddbc1c49673e",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Before and After",
      old_cost: "$65.70",
      current_cost: "$42.38",
      ID_book: "709be59f8669f1315f5e72533b700d27",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Ginger Snaps: Unleashed",
      old_cost: "$51.54",
      current_cost: "$49.56",
      ID_book: "577e34e41c050735674057beb5e44f74",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Shaft in Africa",
      old_cost: "$65.55",
      current_cost: "$48.76",
      ID_book: "088ccbbea052589c4c75a9cca319e1c9",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Juice",
      old_cost: "$59.26",
      current_cost: "$46.30",
      ID_book: "9e25d58537186dbef05867b663808768",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Charlie Chan at the Olympics",
      old_cost: "$66.75",
      current_cost: "$40.40",
      ID_book: "1e1f7529f47d36157afa39d16187418d",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Abominable",
      old_cost: "$63.77",
      current_cost: "$48.01",
      ID_book: "1678e375eb547442352cbccf1853c5cc",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "All the Real Girls",
      old_cost: "$68.75",
      current_cost: "$48.15",
      ID_book: "e844f6b6c58c452d472e4ee7ee5b0b01",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Life or Something Like It",
      old_cost: "$66.56",
      current_cost: "$40.78",
      ID_book: "d05ebf14a2e35bd7bccda79aae20a42e",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "12:01",
      old_cost: "$60.63",
      current_cost: "$47.78",
      ID_book: "6df127d7456b24675406322dccba86c9",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Rocky",
      old_cost: "$56.36",
      current_cost: "$42.63",
      ID_book: "759981588cd26ff9aca7a93068bd1d81",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Green Wave, The",
      old_cost: "$50.10",
      current_cost: "$41.38",
      ID_book: "288478252c41b1af57f1dca503f0938f",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Bounty Hunter, The",
      old_cost: "$59.54",
      current_cost: "$41.28",
      ID_book: "3124463f6799fb1c6ee5ecf8375dbaf4",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Ballplayer: Pelotero",
      old_cost: "$68.77",
      current_cost: "$46.32",
      ID_book: "acd1787b9fcbe33f3e98c1f1a2583209",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Saint, The",
      old_cost: "$67.61",
      current_cost: "$45.44",
      ID_book: "7f2a2d4a295464f665ad921afe65009c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Water",
      old_cost: "$52.91",
      current_cost: "$48.98",
      ID_book: "d7b6079381a27a3179e9ee23bdd838a6",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Ali G Indahouse",
      old_cost: "$53.93",
      current_cost: "$48.14",
      ID_book: "4ee729b2c825e78e37f85f3b3bbc6f8f",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "What Happened Was...",
      old_cost: "$64.69",
      current_cost: "$44.16",
      ID_book: "6267b1f79b1a9ba15083e6a91c822d4c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Go Get Some Rosemary (Daddy Longlegs)",
      old_cost: "$69.63",
      current_cost: "$41.17",
      ID_book: "2cef7f97ef577ee96850b1337e305af2",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Phantasm II",
      old_cost: "$63.07",
      current_cost: "$42.85",
      ID_book: "551428383868e1c70ce8db77caa0a67b",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Happy End",
      old_cost: "$50.77",
      current_cost: "$48.04",
      ID_book: "ea8a0ecfce409a62b239854eaa10fc91",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Windows",
      old_cost: "$56.59",
      current_cost: "$46.88",
      ID_book: "5dd2d2b1da9c631722495b38368d11d1",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "River Queen",
      old_cost: "$53.51",
      current_cost: "$41.38",
      ID_book: "09c026b9d51c880be29c3a24c870bee2",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "North and South, Book II",
      old_cost: "$66.59",
      current_cost: "$46.14",
      ID_book: "9b5471b946751f14d4c240148f65a722",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Fear[s] of the Dark (Peur[s] du noir)",
      old_cost: "$57.37",
      current_cost: "$42.01",
      ID_book: "e6c9d2bdba43cc1d14e045ced7753890",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Dead Awake",
      old_cost: "$69.20",
      current_cost: "$41.34",
      ID_book: "0695a4addf9c584e1fd5f6538c80831c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Fjols til fjells",
      old_cost: "$61.72",
      current_cost: "$48.02",
      ID_book: "c0187947daeb7502b17cd1055edba4d5",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Utamaro and His Five Women (Utamaro o meguru gonin no onna)",
      old_cost: "$66.72",
      current_cost: "$48.23",
      ID_book: "8a3b8384e2d4997e6eb2bab02030e79a",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Reader, The",
      old_cost: "$53.51",
      current_cost: "$46.71",
      ID_book: "812445aacfb661c3ba11636cdbd9721b",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Our Mother's House",
      old_cost: "$63.13",
      current_cost: "$46.17",
      ID_book: "fe5796fe7d103a3e7782bd35b558d5f2",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Mean Machine",
      old_cost: "$69.59",
      current_cost: "$47.05",
      ID_book: "16204effa3f8f4e99a08bcaef0ef3648",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Never Again",
      old_cost: "$67.71",
      current_cost: "$42.05",
      ID_book: "0fd1f9b7de91ed7c6fe1a9e06b471942",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Young Black Stallion, The",
      old_cost: "$54.71",
      current_cost: "$43.65",
      ID_book: "8e6ac6f616b6069b5347bb125b412a50",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Waiting for Superman",
      old_cost: "$61.30",
      current_cost: "$43.33",
      ID_book: "2b5afb0df9b2a4ee19f54712518811b2",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Take Her, She's Mine",
      old_cost: "$51.52",
      current_cost: "$45.02",
      ID_book: "d9538bab44432fc40528ae1c3addf09c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Holocaust",
      old_cost: "$50.58",
      current_cost: "$48.25",
      ID_book: "3d5c7632ebfcdfefee239013dd441423",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name:
        "Hypothesis of the Stolen Painting, The (L'hypothèse du tableau volé)",
      old_cost: "$66.80",
      current_cost: "$48.36",
      ID_book: "c2c8fdc456c3f1260132e136489425ee",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Keep Your Distance",
      old_cost: "$58.08",
      current_cost: "$42.97",
      ID_book: "eb461153d80b59250ec3979759a50632",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Bye Bye Braverman",
      old_cost: "$63.07",
      current_cost: "$45.64",
      ID_book: "0bdccd549635b67df1e1ebc4dad35fc8",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Silk Stockings",
      old_cost: "$69.56",
      current_cost: "$47.22",
      ID_book: "b1c4dc5fd42aeddad6fc93b6597ce6df",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Witness",
      old_cost: "$56.41",
      current_cost: "$44.59",
      ID_book: "624753a38ed2907ade6699350614834f",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Heartbreakers",
      old_cost: "$59.92",
      current_cost: "$45.12",
      ID_book: "90a662743e1ea468ba09a11e4d6d2008",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Dallas Buyers Club",
      old_cost: "$55.47",
      current_cost: "$49.32",
      ID_book: "9ecb827d243fd020b06fc343965e91cf",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Kill Me Later",
      old_cost: "$53.46",
      current_cost: "$43.38",
      ID_book: "7a0f9f2fef970014b631a2839a64468a",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Lisztomania",
      old_cost: "$69.72",
      current_cost: "$47.17",
      ID_book: "58b152f4e4c0b1ca52696eaf6d9c20d6",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Karlsson Brothers (Bröderna Karlsson)",
      old_cost: "$50.18",
      current_cost: "$49.27",
      ID_book: "bc775b7d18cbce98e1ec82b879177531",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Stripes",
      old_cost: "$58.74",
      current_cost: "$48.08",
      ID_book: "f58859ec3f12965b471863876242f535",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Lost World, The",
      old_cost: "$67.53",
      current_cost: "$45.07",
      ID_book: "f09170c8567601c570b0eabcece3c898",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Kickboxer 2: The Road Back",
      old_cost: "$65.29",
      current_cost: "$40.04",
      ID_book: "000731faf42310d0c41d2dd3710c310c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Hucksters, The",
      old_cost: "$68.42",
      current_cost: "$46.45",
      ID_book: "63dfe321a9d0fd70a0e3d2c541096875",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "The Vanishing American",
      old_cost: "$50.53",
      current_cost: "$42.08",
      ID_book: "d8da79910f85a7b31a1c594ceb6f79af",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "K-9",
      old_cost: "$68.79",
      current_cost: "$43.20",
      ID_book: "7c13dbc8786b90317f1b1cd4ca0e6669",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "The Blue Room",
      old_cost: "$56.71",
      current_cost: "$49.76",
      ID_book: "9ccc7b68652f48aa730b5ce730569bcd",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Stick It",
      old_cost: "$56.93",
      current_cost: "$49.18",
      ID_book: "d834457b61627ee3fdc9580a3c36fe47",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Mama",
      old_cost: "$52.41",
      current_cost: "$48.02",
      ID_book: "f0bb622f95e64f27f174a32d6658156d",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Mondo Hollywood",
      old_cost: "$63.98",
      current_cost: "$46.96",
      ID_book: "bd4d0f168f014d047a891386f5c8c3dc",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Prowler, The",
      old_cost: "$60.07",
      current_cost: "$43.58",
      ID_book: "570dba79d663a126beebcfe20c6afb74",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "I'm King Kong!: The Exploits of Merian C. Cooper ",
      old_cost: "$61.90",
      current_cost: "$44.46",
      ID_book: "ed2a8b5acf7096fec74926ba7c7aac8e",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Target",
      old_cost: "$62.34",
      current_cost: "$48.88",
      ID_book: "1fe6abc4aad07de582cc490454470f31",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Anguish (Angustia)",
      old_cost: "$55.95",
      current_cost: "$40.60",
      ID_book: "f720c09fcb4724196207acfe3de3fa09",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "At the Earth's Core",
      old_cost: "$64.82",
      current_cost: "$46.53",
      ID_book: "adbf30bf0b6aaeae024b8ea1936436e7",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Valley of the Dolls",
      old_cost: "$65.07",
      current_cost: "$48.90",
      ID_book: "d8826ca7389cbc2e391c60cd33b9221d",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Citizen Toxie: The Toxic Avenger IV",
      old_cost: "$57.67",
      current_cost: "$43.50",
      ID_book: "5c7be2e9df720bcf6ff6475aab803565",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "The Amazing Dr. Clitterhouse",
      old_cost: "$65.62",
      current_cost: "$47.47",
      ID_book: "650b42f66a1afb970c88bc72a433794b",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Vengo",
      old_cost: "$62.45",
      current_cost: "$48.77",
      ID_book: "582288b07ef2739f92310397e737225b",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Raisin in the Sun, A",
      old_cost: "$53.11",
      current_cost: "$43.25",
      ID_book: "a42defaaeb5b0ea9963780e2edf6cdfa",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Cube of Sugar, A (Ye Habe Ghand)",
      old_cost: "$57.81",
      current_cost: "$48.76",
      ID_book: "4bf64afbd01e84d322d7b1647f1cfa4c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Wyrmwood",
      old_cost: "$53.48",
      current_cost: "$42.80",
      ID_book: "12d9332cb7f977ad2aec005a4061481c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Live Flesh (Carne trémula)",
      old_cost: "$67.37",
      current_cost: "$48.40",
      ID_book: "d92a78bf8c5fda255ba911083ee91821",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Assault on Wall Street ",
      old_cost: "$67.12",
      current_cost: "$45.24",
      ID_book: "4c5adcc396d4125bee98fb0d53c23743",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Story of Seabiscuit, The",
      old_cost: "$69.14",
      current_cost: "$44.53",
      ID_book: "f604095a4bed353b3e43fbbbeb3c1fdc",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Minecraft: The Story of Mojang",
      old_cost: "$56.90",
      current_cost: "$45.43",
      ID_book: "7b7d66e9758d29e25e149ff28a2e2a05",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "One Good Cop",
      old_cost: "$60.31",
      current_cost: "$49.54",
      ID_book: "22979750c01df05a53e01f6ffcf6b2e8",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "The Girls",
      old_cost: "$68.43",
      current_cost: "$44.41",
      ID_book: "38a9db8ed60aeaa3b7680714a6bc650b",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Doggiewoggiez! Poochiewoochiez!",
      old_cost: "$50.24",
      current_cost: "$47.57",
      ID_book: "2b223e6b5f52a98e3a47676636fb891d",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Hardware",
      old_cost: "$55.85",
      current_cost: "$44.46",
      ID_book: "f262f428fd8ddc90c5b6b5c1ea3c6287",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Endangered Species",
      old_cost: "$64.50",
      current_cost: "$41.29",
      ID_book: "12358f7149180573e5ee688860248f25",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Public Eye, The (Follow Me!)",
      old_cost: "$59.85",
      current_cost: "$41.38",
      ID_book: "4ef54cad15081fecc36f855ee8a920a1",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Testament of Dr. Mabuse, The (Das Testament des Dr. Mabuse)",
      old_cost: "$65.72",
      current_cost: "$43.84",
      ID_book: "66f4190813e29e24b0c14ba76ef336ae",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Before Sunset",
      old_cost: "$66.92",
      current_cost: "$45.60",
      ID_book: "226c3e13b968fd8cad782f6fbe35c725",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Mortal Instruments: City of Bones, The",
      old_cost: "$53.29",
      current_cost: "$41.01",
      ID_book: "0a227f3b1eecf569a26ea2661903419f",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Daisy Kenyon",
      old_cost: "$55.55",
      current_cost: "$42.30",
      ID_book: "788e179a308eff4fc50a652eed8aad33",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Cell Count",
      old_cost: "$62.74",
      current_cost: "$46.15",
      ID_book: "6f5d0ef20e0c5e4f1725fe4e3ebca1e4",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Faces of Death 6",
      old_cost: "$56.48",
      current_cost: "$48.81",
      ID_book: "6d2b43dc6ffe0ff911f50390d5013cc1",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Blood, Guts, Bullets and Octane",
      old_cost: "$58.92",
      current_cost: "$47.54",
      ID_book: "58114c4766ddcd7f982f18fbae36d294",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Zoom",
      old_cost: "$52.70",
      current_cost: "$43.33",
      ID_book: "bd556189b0d41bdc5882809a8543e9a4",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Diary of a Mad Housewife",
      old_cost: "$57.26",
      current_cost: "$48.16",
      ID_book: "8477c808da1ad74d6b829021a7b2f8e7",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Matinée",
      old_cost: "$65.88",
      current_cost: "$48.65",
      ID_book: "59ac095da8e1a0b67cc902a0801f6167",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "The Eagle and the Hawk",
      old_cost: "$58.00",
      current_cost: "$41.18",
      ID_book: "2d93122565e874ba350c704e1a2f32e1",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Good Day to Die Hard, A",
      old_cost: "$69.36",
      current_cost: "$45.61",
      ID_book: "b257b05110a849f63ed25b192064187c",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "The Princess of Egypt",
      old_cost: "$66.66",
      current_cost: "$45.61",
      ID_book: "4387d1a87314c5c21d56e1174d19ab47",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Day of the Wacko (Dzien swira)",
      old_cost: "$57.18",
      current_cost: "$46.09",
      ID_book: "54dc7a9c6a569f3faf703dac350ae835",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Havoc",
      old_cost: "$65.44",
      current_cost: "$42.94",
      ID_book: "ee14f3e4de7c677e9f4d7b8e8cffc49d",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Sleep Room, The",
      old_cost: "$61.01",
      current_cost: "$49.47",
      ID_book: "324534241b646c015d38b4f5e8a0d75f",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Other Woman, The",
      old_cost: "$57.85",
      current_cost: "$48.28",
      ID_book: "03ba7ddd133a5cb7d53f5855a9fd056a",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Russell Brand: Messiah Complex",
      old_cost: "$53.42",
      current_cost: "$44.01",
      ID_book: "8ee9207babd440cb92cd654e507d906e",
    },
    {
      image_book:
        "https://res.cloudinary.com/drwu7jx1w/image/upload/c_scale,h_340,w_270/v1605323030/pexels-thought-catalog-904620_dsuiob.jpg",
      book_name: "Kitty",
      old_cost: "$56.27",
      current_cost: "$44.84",
      ID_book: "c2e18d8da2ebd7b5b93da296eda5ab6b",
    },
  ];
};

module.exports.getDisplayedBook = (page) => {
  const bookList = this.listBook();
  const productPerPage = 12;
  const startIndex = (page - 1) * productPerPage;
  const endIndex = page * productPerPage;

  return bookList.slice(startIndex, endIndex);
};

module.exports.pagination = (page) => {
  let paginationArr = [];

  let temp = 0;

  if (page % numPagePerPagination == 0) {
    temp = numPagePerPagination - 1;

    while (temp >= 0) {
      paginationArr.push({ number: page - temp });
      temp--;
    }

    return paginationArr;
  }

  temp = 1;

  while ((page % numPagePerPagination) - temp >= 0) {
    paginationArr.push({
      number: page - ((page % numPagePerPagination) - temp),
    });
    temp++;
  }

  while (
    temp <= numPagePerPagination &&
    page + (temp - (page % numPagePerPagination)) <= MAX_NUMBER_PAGE
  ) {
    paginationArr.push({
      number: page + (temp - (page % numPagePerPagination)),
    });
    temp++;
  }

  return paginationArr;
};

module.exports.prevPage = (currentMinPage) => {
  if (currentMinPage < numPagePerPagination) {
    return 0;
  }

  return currentMinPage - 1;
};
module.exports.nextPage = (currentMinPage) => {
  if (currentMinPage + numPagePerPagination <= MAX_NUMBER_PAGE) {
    return currentMinPage + numPagePerPagination;
  }

  return 0;
};

module.exports.getNewProduct = () => {
  let listBook = this.listBook();
  return listBook.slice(0, 7);
};
module.exports.getBestSellerBook = () => {
  let listBook = this.listBook();
  return listBook.slice(0, 10);
};

module.exports.getRelatedBook = () => {
  let listBook = this.listBook();
  return listBook.slice(0, 6);
};

module.exports.getUpsellProduct = () => {
  let listBook = this.listBook();
  return listBook.slice(10, 16);
};

module.exports.getBookByCatory = (catory, number = -1) => {
  //number = -1 is get all

  //------------------------------- Sua lai sau khi co CSDL
  let listBook = this.listBook();
  //------------------------------

  if (number > 0) {
    number = number > listBook.length ? listBook.length : number;
    listBook = listBook.slice(0, number);
  }

  return listBook;
};
