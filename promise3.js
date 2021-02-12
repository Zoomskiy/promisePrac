let pr = new Promise((resolve) => {
    let data = {
        cities: [{title: "Minsk"}, {title: "Kiev"}],
        website: "it-kamasutra.com"
    };
    resolve(data);
});

pr.then(data => {
    console.log(data);
    return data.website
})
    .then(website => {
        console.log(website);
    })