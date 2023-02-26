import PropTypes from 'prop-types';

import styles from './contactFilter.module.scss';

const ContactFilter = ({ handleChange, value }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.blockTitle}>Find contact</label>
      <input
        value={value}
        onChange={handleChange}
        name="filter"
        placeholder="enter contact"
      />
    </div>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
