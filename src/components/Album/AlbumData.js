import gallery1 from 'assets/Album/List/gallery01.png';
import gallery2 from 'assets/Album/List/gallery02.png';
import gallery3 from 'assets/Album/List/gallery03.png';
import gallery4 from 'assets/Album/List/gallery04.png';
import gallery5 from 'assets/Album/List/gallery05.png';
import gallery6 from 'assets/Album/List/gallery06.png';

const total_Pages = 10;

const album_data = [
  {
    albumId: 24,
    title: '2024 졸업식',

    writer: '작성자1',

    createdAt: '1분 전',
    thumbnail: gallery1,
    alt: '2024-졸업식',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 23,
    title: 'umc 해커톤',

    writer: '작성자2',

    createdAt: '5시간 전',
    thumbnail: gallery2,
    alt: 'umc-해커톤',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 22,
    title: '단체 야구 관람',

    writer: '작성자3',

    createdAt: '6시간 전',
    thumbnail: gallery3,
    alt: '단체 야구 관람',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 21,
    title: '새내기 캠퍼스 투어',

    writer: '작성자4',

    createdAt: '2023.12.18',
    thumbnail: gallery4,
    alt: '새내기 캠퍼스 투어',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 20,
    title: '2024 졸업식',

    writer: '작성자1',

    createdAt: '2023.11.14',
    thumbnail: gallery1,
    alt: '2024-졸업식',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 19,
    title: '학교 사진',

    writer: '작성자2',

    createdAt: '2023.11.14',
    thumbnail: gallery4,
    alt: '학교 사진',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 18,
    title: '12차 회의 사진',

    writer: '작성자3',

    createdAt: '2023.11.14',
    thumbnail: gallery5,
    alt: '12차 회의 사진',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 17,
    title: '단체 축구 관람',

    writer: '작성자4',

    createdAt: '2023.11.14',
    thumbnail: gallery6,
    alt: '단체 축구 관람',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 16,
    title: '2024 졸업식',

    writer: '작성자1',

    createdAt: '1분 전',
    thumbnail: gallery1,
    alt: '2024-졸업식',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 15,
    title: 'umc 해커톤',

    writer: '작성자2',

    createdAt: '5시간 전',
    thumbnail: gallery2,
    alt: 'umc-해커톤',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 14,
    title: '단체 야구 관람',

    writer: '작성자3',

    createdAt: '6시간 전',
    thumbnail: gallery3,
    alt: '단체 야구 관람',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 13,
    title: '새내기 캠퍼스 투어',

    writer: '작성자4',

    createdAt: '2023.12.18',
    thumbnail: gallery4,
    alt: '새내기 캠퍼스 투어',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 12,
    title: '2024 졸업식',

    writer: '작성자1',

    createdAt: '2023.11.14',
    thumbnail: gallery1,
    alt: '2024-졸업식',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 11,
    title: '학교 사진',

    writer: '작성자2',

    createdAt: '2023.11.14',
    thumbnail: gallery4,
    alt: '학교 사진',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 10,
    title: '12차 회의 사진',

    writer: '작성자3',

    createdAt: '2023.11.14',
    thumbnail: gallery5,
    alt: '12차 회의 사진',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 9,
    title: '단체 축구 관람',

    writer: '작성자4',

    createdAt: '2023.11.14',
    thumbnail: gallery6,
    alt: '단체 축구 관람',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 8,
    title: '2024 졸업식',

    writer: '작성자1',

    createdAt: '1분 전',
    thumbnail: gallery1,
    alt: '2024-졸업식',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 7,
    title: 'umc 해커톤',

    writer: '작성자2',

    createdAt: '5시간 전',
    thumbnail: gallery2,
    alt: 'umc-해커톤',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 6,
    title: '단체 야구 관람',

    writer: '작성자3',

    createdAt: '6시간 전',
    thumbnail: gallery3,
    alt: '단체 야구 관람',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 5,
    title: '새내기 캠퍼스 투어',

    writer: '작성자4',

    createdAt: '2023.12.18',
    thumbnail: gallery4,
    alt: '새내기 캠퍼스 투어',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 4,
    title: '2024 졸업식',

    writer: '작성자1',

    createdAt: '2023.11.14',
    thumbnail: gallery1,
    alt: '2024-졸업식',
    hitCount: 182,
    imageCnt: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 3,
    title: '학교 사진',

    writer: '작성자2',

    createdAt: '2023.11.14',
    thumbnail: gallery4,
    alt: '학교 사진',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 2,
    title: '12차 회의 사진',

    writer: '작성자3',

    createdAt: '2023.11.14',
    thumbnail: gallery5,
    alt: '12차 회의 사진',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    albumId: 1,
    title: '단체 축구 관람',

    writer: '작성자4',

    createdAt: '2023.11.14',
    thumbnail: gallery6,
    alt: '단체 축구 관람',
    hitCount: 182,
    imageCnt: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
];

export { total_Pages, album_data };
