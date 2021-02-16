const fetchUserCode = () => {
    
    // const URL = 'testURL';
    // const options: RequestInit = {
    //     method: 'POST',
    //     credentials: "include",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({username, title})
    // };

    // const response = await fetch(URL, options); 

    // const responseData = response.json();

    // const { order, data } = responseData;

    const order = [
        'f2s5o',
        '2gfls',
        'siu03',
        '18gfo'
      ];
    
    const data =  {
        '2gfls': {
          content: 'const a = 1;',
          type: 'javascript',
          id: '2gfls'
        },
        'f2s5o': {
          content: '# TEST 1',
          type: 'text',
          id: 'f2s5o'
        },
        '18gfo': {
          content: 'const b = 2;',
          type: 'javascript',
          id: '18gfo'
        },
        'siu03': {
          content: '# TEST 2\n',
          type: 'text',
          id: 'siu03'
        }
      }

      return {order, data}
}

export default fetchUserCode;