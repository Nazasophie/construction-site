import { useMemo } from "react";
import styles from "./EmailFormContainer.module.css";

const EmailFormContainer = ({
  propHeight,
  propAlignSelf,
  propWidth,
  propJustifyContent,
  propGap,
  propAlignSelf1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
      alignSelf: propAlignSelf1,
    };
  }, [propJustifyContent, propGap, propAlignSelf1]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.frameWrapper} style={frameDiv2Style}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <b className={styles.usefulLinks}>Useful Links</b>
            </div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetConWrapper}>
            <b className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Mauris ac phasellus tortor
              dictum.
            </b>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv} style={frameDiv3Style}>
        <div className={styles.yourEmailAddrsssWrapper}>
          <b className={styles.usefulLinks}>Your email addrsss</b>
        </div>
        <div className={styles.caretrightfill}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailFormContainer;
