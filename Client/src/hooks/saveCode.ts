const saveCode = async (codeState: any) => {
    const { order, data } = codeState;
    const URL: string = 'testURL'
    const options: RequestInit = {
        method: 'POST',
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({order, data})
    };
    
    console.log('code state order', order)
        console.log('code state data', data)

    const response = await fetch(URL, options); 

    const responseData = response.json();

    // Dispatch action
    // Use React Toast to notify users that the code saved successfully or unsuccessfuly
};

export default saveCode;