export interface Book {
    id: number;
    title: string;
    content: string;
    price: number;
    author: string;
    star: string;
}

const bookdata: Book[] = [
    {
        id: 1000,
        title: '그림으로 배우는 C++ Programming Basic',
        content: '쉡게 익히는 입문서! 두번째 개정판',
        price: 50000,
        author: 'Mara Taviskim',
        star: '⭐⭐⭐⭐'
    } , 
    {
        id: 1001,
        title: 'OpenCV로 배우는 영상 처리 및 응용',
        content: 'C++ API를 이용하여 영상처리 프로그램을 배우고 응용해보세요.',
        price: 25600,
        author: '장성환',
        star: '⭐⭐⭐'
    } ,
    {
        id: 1002,
        title: 'Springboot in action',
        content: 'Springboot에 대해서 깊고 자세히 알아가보세요.',
        price: 18000,
        author: 'Greg Walts',
        star: '⭐⭐⭐⭐⭐'
    },
];

export default bookdata;