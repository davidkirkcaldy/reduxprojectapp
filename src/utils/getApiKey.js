/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
const getApiKey = async () => {
    // Read in userid.json to get the client id and secret
    const response = await fetch('/userId.json')

    if (!response.ok) {    
        throw new Error('Failed to load userid.json');
    }
    const json = await response.json();
    return json;
}

export default getApiKey;