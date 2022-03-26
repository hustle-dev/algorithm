const solution = (req_id, req_info) => {
  // 완료되지 않은 요청 -> pending
  // 완료된 요청 -> done
  // 판매할 골드의 양 sell_amount
  // 판매 가격 -> sell_price
  // 구매 -> 0
  // 판매 -> 1
  // 어떤 회원의 pending 상태인 구매 요청이 있다면 그 회원은 판매요청을 하지 않는다.
  // 반대로 어떤 회원의 pending 상태인 판매 요청이 있다면 그 회원은 구매 요청을 등록하지 않는다.

  const pendingStatus = {};

  // buyinfo에 등록순서, 아이디(id), 구매 수량(buyAmount), 구매가격(buyPrice)
  // sellInfo에 등록순서, 아이디(id), 판매 수량(sellAmount) , 판매 가격(sellPrice)

  const buyInfo = [];
  const sellInfo = [];
  const accountInfo = {};

  for (const id of req_id) {
    accountInfo[id] = { gold: 0, silver: 0 };
  }

  req_info.forEach((info, i) => {
    const [type, amount, price] = info;
    const curIndex = i;

    // 판매
    if (type === 1) {
      // [{order, id(name), buyAmount, buyPrice, isDone}]
      const buyReq = buyInfo.filter(buy => buy.isDone === false && price >= buyPrice);

      // 거래가 이루어지지 못한것
      if (buyReq.length === 0) {
        // 펜딩이 아닌 경우에만 펜딩상태에 들어갈 수 있음
        if (pendingStatus[req_id[i]] !== 'pending') {
          sellInfo.push({
            order: sellInfo.length + 1,
            id: req_id[i],
            sellAmount: amount,
            sellPrice: price,
            isDone: false,
          });
          pendingStatus[req_id[i]] = 'pending';
        }

        // 거래가 이루어진것(두 가지 경우 -> 완전히 다 팔린거, 남은거)
      } else {
        const sortBuyReq = buyReq.sort((a, b) => (a.buyPrice < b.buyPrice ? 1 : b.order - a.order));

        // 현재 판매수량, 판매 가격 -> amount, price
        // accountInfo에 주고받은 내역 저장
        // 데이터베이스안에 결과 저장해주어야함.
        for (let i = 0; i < sortBuyReq.length; i++) {
          const [order, id, buyAmount, buyPrice] = sortBuyReq[i];

          // 다 팔린 경우
          if (buyAmount >= amount) {
            // 구매자
            accountInfo[id].gold += amount;
            accountInfo[id].silver -= amount * price;

            // 판매자
            accountInfo[req_id[curIndex]].gold -= amount;
            accountInfo[req_id[curIndex]].silver += amount * price;

            // 데이터베이스 결과 반영
            const index = buyInfo.findIndex(el => el.order === order);
            buyInfo[index].buyAmount = buyAmount - amount;

            amount = 0;

            // 그렇지 않은 경우
          } else {
            amount = amount - buyAmount;

            // 구매자
            accountInfo[id].gold += buyAmount;
            accountInfo[id].silver -= buyAmount * price;

            // 판매자
            accountInfo[req_id[curIndex]].gold -= buyAmount;
            accountInfo[req_id[curIndex]].silver += buyAmount * price;

            const index = buyInfo.findIndex(el => el.order === order);
            buyInfo[index].buyAmount = 0;
            buyInfo[index].isDone = true;
          }

          if (amount === 0) break;
        }

        // 완전히 다 팔린거
        if (amount === 0) {
          sellInfo.push({
            order: sellInfo.length + 1,
            id: req_id[i],
            sellAmount: amount,
            sellPrice: price,
            isDone: true,
          });
          pendingStatus[req_id[i]] = 'notpending';
          // 남은거
        } else {
          sellInfo.push({
            order: sellInfo.length + 1,
            id: req_id[i],
            sellAmount: amount,
            sellPrice: price,
            isDone: false,
          });
          pendingStatus[req_id[i]] = 'pending';
        }
      }

      // 구매
    } else {
      const sellReq = sellInfo.filter(sell => sell.isDone === false && price <= sell.sellPrice);

      // 거래가 이루어지지 못한것
      if (sellReq.length === 0) {
        if (pendingStatus[req_id[i]] !== 'pending') {
          buyInfo.push({
            order: buyInfo.length + 1,
            id: req_id[i],
            buyAmount: amount,
            buyPrice: price,
            isDone: false,
          });
          pendingStatus[req_id[i]] = 'pending';
        }
        // 거래가 이루어진것(두 가지 경우 -> 완전히 다 구매한거, 남은거)
      } else {
        const sortSellReq = sortSellReq.sort((a, b) =>
          a.sellPrice < b.sellPrice ? 1 : b.order - a.order
        );

        // 현재 판매수량, 판매 가격 -> amount, price
        for (let i = 0; i < sortSellReq.length; i++) {
          const [order, id, sellAmount, buyPrice] = sortSellReq[i];

          // 다 구매한 경우
          if (sellAmount >= amount) {
            // 구매자
            accountInfo[id].gold += amount;
            accountInfo[id].silver -= amount * price;

            // 판매자
            accountInfo[req_id[curIndex]].gold -= amount;
            accountInfo[req_id[curIndex]].silver += amount * price;

            // 데이터베이스 결과 반영
            const index = sellInfo.findIndex(el => el.order === order);
            sellInfo[index].sellAmount = sellAmount - amount;

            amount = 0;

            // 그렇지 않은 경우
          } else {
            amount = amount - sellAmount;

            // 구매자
            accountInfo[id].gold += sellAmount;
            accountInfo[id].silver -= sellAmount * price;

            // 판매자
            accountInfo[req_id[curIndex]].gold -= sellAmount;
            accountInfo[req_id[curIndex]].silver += sellAmount * price;

            const index = sellInfo.findIndex(el => el.order === order);
            sellInfo[index].sellAmount = 0;
            sellInfo[index].isDone = true;
          }

          if (amount === 0) break;
        }

        // 완전히 다 구매한거
        if (amount === 0) {
          buyInfo.push({
            order: buyInfo.length + 1,
            id: req_id[i],
            sellAmount: amount,
            sellPrice: price,
            isDone: true,
          });
          pendingStatus[req_id[i]] = 'notpending';
          // 남은거
        } else {
          buyInfo.push({
            order: buyInfo.length + 1,
            id: req_id[i],
            sellAmount: amount,
            sellPrice: price,
            isDone: false,
          });
          pendingStatus[req_id[i]] = 'pending';
        }
      }
    }
  });

  console.log(accountInfo);
};

console.log(
  solution(
    ['William', 'Andy', 'Rohan', 'Rohan', 'Louis', 'Andy'],
    [
      [1, 7, 20],
      [0, 10, 10],
      [1, 10, 40],
      [1, 4, 25],
      [0, 5, 11],
      [0, 20, 30],
    ]
  )
);
