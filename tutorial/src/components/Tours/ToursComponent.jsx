import React from "react"
import { SingleTour } from "./SingleTour"
import styles from "../../css/items.module.css"

export const ToursComponent = ({ tours }) => {
  //console.log(tours)
  return (
    <section className={styles.tours}>
      <h2>Ours tours</h2>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <SingleTour key={node.id} tour={node}></SingleTour>
        })}
      </div>
    </section>
  )
}
