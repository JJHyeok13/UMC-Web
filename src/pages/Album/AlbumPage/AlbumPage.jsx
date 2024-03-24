import React, { useState, useEffect } from 'react';

import axiosInstance from 'apis/setting';

//import { total_Pages, album_data } from 'components/Album/GalleryData';

import AlbumTitle from 'components/Album/AlbumTitle/GalleryTitle';
import AlbumWriteButton from 'components/Album/GalleryWriteButton';
import AlbumList from 'components/Album/GalleryList';

import styles from './styles';

const AlbumPage = () => {
  const [page, setPage] = useState(0);
  //const totalPages = total_Pages;
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  //const albumData = album_data;
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const getAlbumData = async ({ page }) => {
      try {
        const res = await axiosInstance.get(`/albums`, {
          params: {
            page: page,
          },
        });
        setAlbumData(res.data.result.albumPageResponses);
        setTotalPages(res.data.result.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbumData(page);
  }, [page]);

  return (
    <styles.AlbumPageContainer>
      <styles.UpperWrapper>
        <AlbumTitle />
        <AlbumWriteButton />
      </styles.UpperWrapper>

      <AlbumList
        albumData={albumData}
        page={page}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
    </styles.AlbumPageContainer>
  );
};

export default AlbumPage;
