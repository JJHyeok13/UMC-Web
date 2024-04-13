import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import useDebounce from 'hooks/useDebounce';

const Github = ({ githubID }) => {
  const debouncedGithubID = useDebounce(githubID, 1000);
  const URL = `https://ghchart.rshah.org/2965FF/${debouncedGithubID}`;

  return (
    <div>
      <styles.GithubImage
        src={URL}
        alt={`${debouncedGithubID}'s GitHub contribution chart`}
      />
    </div>
  );
};

Github.propTypes = {
  githubID: PropTypes.string.isRequired,
};

export default Github;
