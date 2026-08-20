import React from 'react'

import classes from '../index.module.scss'

type Props = {
  blockType?: 'corespacePlaceholder'
  label?: null | string
}

export const CorespacePlaceholder: React.FC<Props> = ({ label }) => {
  return (
    <div className={classes.empty}>
      <p className={classes.emptyEyebrow}>Upcoming section</p>
      <h2 className={classes.emptyTitle}>{label || 'Section coming soon'}</h2>
      <p className={classes.emptyBody}>
        This placeholder will be replaced once the designed section is implemented from the
        screenshot.
      </p>
    </div>
  )
}
