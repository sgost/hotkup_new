import React from "react"
import fly_heart from "../../../data/assets/banner/fly_heart.png"
import p4_c1 from "../../../data/assets/banner/p4_c1.png"
import p4_c2 from "../../../data/assets/banner/p4_c2.png"
import p4_c3 from "../../../data/assets/banner/p4_c3.png"
import p4_c4 from "../../../data/assets/banner/p4_c4.png"
import { ReviewMain } from "./styles"

const Review = () => {
  return (
    <ReviewMain>
      <div className="review_title">
        <h1>
          People really <img src={fly_heart} alt="fly_heart" />
          love HOTKUP
        </h1>
        <p>
          Thousands of people have already made the switch from other work
          management services.
        </p>
      </div>

      <div className="review_cards_main">
        <div className="review_card">
          <p>
            <span>
              โ In positive news, hotkup seems to have finally solved work
              management.{" "}
            </span>
            Been using it several weeks and no longer dealing with long lists of
            โunreadโ mails, or sorting out annoying but important docs. The
            relief is so real ๐ โ
          </p>
          <div className="customer">
            <img src={p4_c1} alt="p4_c1" />
            <span>Rosy Williams</span>
          </div>
        </div>
        <div className="review_card">
          <p>
            <span>
              โ If you designed task management from scratch such that it
              vigorously protected your privacy and your time,{" "}
            </span>
            this is what it would look like. I think youโre going to love it. ๐
            โ
          </p>
          <div className="customer">
            <img src={p4_c2} alt="p4_c1" />
            <span>Dan Mall</span>
          </div>
        </div>
        <div className="review_card">
          <p>
            <span>โ hotkup is the most exciting app Iโve used in years.</span>A
            complete rethinking of work management, full of bold, brilliant
            ideas. Highly recommended. Not only for the product itself, but
            because its boldness will inspire you to question your assumptions
            and think differently.โ
          </p>
          <div className="customer">
            <img src={p4_c3} alt="p4_c1" />
            <span>Dan Mall</span>
          </div>
        </div>
        <div className="review_card">
          <p>
            Just got a demo of Hotkup with the team.{" "}
            <span>โค๏ธ the level of product thinking</span> thatโs gone into
            rebuilding work management from scratch.
          </p>
          <div className="customer">
            <img src={p4_c4} alt="p4_c1" />
            <span>Rosy Williams</span>
          </div>
        </div>
      </div>
    </ReviewMain>
  )
}
export default Review
