const randomNumberDec = (min, max) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

const randomNumberInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumberArr = (len) => {
  return Array.from({length: len}, () => Number((Math.random() * 100).toFixed(2)));
}

const generateSimilarList = (data) => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let newObj = { id: i, similar: [] };

    for (let i = 0; i < 15; i++) {
      newObj.similar.push(data[i]);
    }
    result.push(newObj);
  }
  return result;
}

const generateLikeList = (data) => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let newObj = { id: i, like: [] };

    for (let i = 0; i < 15; i++) {
      let getData = data[randomNumberInt(0, 1500)];
      newObj.like.push(getData);
    }
    result.push(newObj);
  }
  return result;
}

module.exports = {
  randomNumberDec,
  randomNumberInt,
  randomNumberArr,
  generateSimilarList,
  generateLikeList
};