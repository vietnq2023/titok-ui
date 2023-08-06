import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9bea2c30cf41b2cb99db73e81b62b2b8~c5_100x100.jpeg?x-expires=1691452800&x-signature=W%2Fcf7myO4Bhb1UnnONtiHcw0Lew%3D"
        alt="vietbk"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Quang Viet</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>vietbk</span>
      </div>
    </div>
  );
}

export default AccountItem;
