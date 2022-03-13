const solution = S => {
  let photos = S.split('\n');

  let citiesObject = {};

  photos = photos.map(photo => {
    const contents = photo.split(', ');
    const city = contents[1];

    if (citiesObject[city]) citiesObject[city].push(contents);
    else citiesObject[city] = [contents];
    return contents;
  });

  for (const city in citiesObject) {
    citiesObject[city].sort((p1, p2) => new Date(p1[2]) - new Date(p2[2]));

    const numLen = citiesObject[city].length.toString().length;

    citiesObject[city] = citiesObject[city].map((photo, i) => {
      const city = photo[1];
      let n = i + 1;
      let hasZeroNum = numLen - n.toString().length;
      while (hasZeroNum !== 0) {
        n = '0' + n;
        hasZeroNum--;
      }

      const extension = photo[0].split('.')[1];
      return [...photo, `${city}${n}.${extension}`];
    });
  }

  let ans = '';
  for (const [photoName, city, date] of photos) {
    for (const [photoName2, city2, date2, photo] of citiesObject[city]) {
      if (photoName + city + date === photoName2 + city2 + date2) {
        if (ans) ans += '\n';
        ans += photo;
      }
    }
  }

  return ans;
};

console.log(
  solution(
    'photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11'
  )
);
