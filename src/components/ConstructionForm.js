import { useMemo } from "react";
import styles from "./ConstructionForm.module.css";

const ConstructionForm = ({
  twitterIconWidth,
  twitterIconPadding,
  twitterIconAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: twitterIconWidth,
      padding: twitterIconPadding,
      alignSelf: twitterIconAlignSelf,
    };
  }, [twitterIconWidth, twitterIconPadding, twitterIconAlignSelf]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameWrapper1}>
                <div className={styles.omegaX5fConstructionParent}>
                  <div className={styles.omegaX5fConstruction}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.constructureWrapper}>
                          <div className={styles.constructure}>
                            Constructure
                          </div>
                        </div>
                      </div>
                      <div className={styles.phloxGroupWrapper}>
                        <div className={styles.phloxGroup}>Phlox Group</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Feugiat malesuada felis ut
            congue id fringilla. Sit libero elementum sagittis ut.
          </div>
        </div>
        <div className={styles.twitterParent} style={frameDivStyle}>
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <img className={styles.twitterIcon} alt="" src="/linkdln.svg" />
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
          <img className={styles.facebookIcon} alt="" src="/tiktok.svg" />
        </div>
      </div>
    </div>
  );
};

export default ConstructionForm;
