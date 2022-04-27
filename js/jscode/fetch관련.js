const url = '';

const solution = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('네트워크 에러가 발생했습니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('에러 발생');
  }
};
