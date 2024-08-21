// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
}

// Example usage
// iterateWithAsyncAwait(['a', 'b', 'c']);

// Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data'); // Simulate API call
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
// awaitCall();

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data'); // Simulate API call
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example usage
// awaitCall();

// Task 04: Chaining Async/Await
async function asyncFunction1() {
    return new Promise(resolve => setTimeout(() => {
        console.log('Function 1 completed');
        resolve();
    }, 1000));
}

async function asyncFunction2() {
    return new Promise(resolve => setTimeout(() => {
        console.log('Function 2 completed');
        resolve();
    }, 1000));
}

async function asyncFunction3() {
    return new Promise(resolve => setTimeout(() => {
        console.log('Function 3 completed');
        resolve();
    }, 1000));
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Example usage
// chainedAsyncFunctions();

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://api.example.com/data1'), // Simulate API call
            fetch('https://api.example.com/data2')
        ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log('Results:', data1, data2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
// concurrentRequests();

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        const requests = urls.map(url => fetch(url));
        const responses = await Promise.all(requests);
        const dataPromises = responses.map(response => response.json());
        const data = await Promise.all(dataPromises);
        console.log('Responses:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
// parallelCalls([
//     'https://api.example.com/data1',
//     'https://api.example.com/data2',
//     'https://api.example.com/data3'
// ]);

