const collect_ratings = () => {
    const ratings = { 'count': 0, 'sum': 0, 'average': 0 };

    let ratings = 0;

    const elements = documents.querySelectorAll('.rating');
    elements.forEach(element => {
        rating = parseInt(element.value);
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating;
    });

    if (ratings.count !== 0) {
        ratings.average = rating.sum / ratings.count;
    }

    return ratings;
}

document.addEventListener('change',  () => {
    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2)
})