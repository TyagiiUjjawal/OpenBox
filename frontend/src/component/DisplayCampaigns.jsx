import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/demo/poor.jpg";
import FundCard from "./FundCard";
import { loader } from "../assets";
import "../styles/layout.css";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  let actcapm = 0;
  return (
    <div className="">
      <div class="bgded overlay " style={{ backgroundImage: `url(${image})` }}>
        <header id="header" class="hoc clear">
          <div id="logo" class="one_quarter first">
            <h1>
              <a href="/">OpenBox</a>
            </h1>
            <p>TRANSPARENT DONATION PLATFORM</p>
          </div>
          <div class="three_quarter">
            <ul class="nospace clear">
              <li class="one_third first">
                <div class="block clear">
                  <a href="#">
                    <i class="fas fa-phone"></i>
                  </a>{" "}
                  <span>
                    <strong>Give us a call:</strong> 9627980099
                  </span>
                </div>
              </li>
              <li class="one_third">
                <div class="block clear">
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>{" "}
                  <span>
                    <strong>Send us a mail:</strong> tyagiujjawal9@gmail.com
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </header>
        {/* <section id="navwrapper" class="hoc clear">
          <nav id="mainav">
            <ul class="clear">
              <li class="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a class="drop" href="#">
                  Pages
                </a>
                <ul>
                  <li>
                    <a href="pages/gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="pages/full-width.html">Full Width</a>
                  </li>
                  <li>
                    <a href="pages/sidebar-left.html">Sidebar Left</a>
                  </li>
                  <li>
                    <a href="pages/sidebar-right.html">Sidebar Right</a>
                  </li>
                  <li>
                    <a href="pages/basic-grid.html">Basic Grid</a>
                  </li>
                  <li>
                    <a href="pages/font-icons.html">Font Icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="drop" href="#">
                  Dropdown
                </a>
                <ul>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                  <li>
                    <a class="drop" href="#">
                      Level 2 + Drop
                    </a>
                    <ul>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                      <li>
                        <a href="#">Level 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Link Text</a>
              </li>
              <li>
                <a href="#">Long Link Text</a>
              </li>
            </ul>
          </nav>
          <div id="searchform">
            <div>
              <form action="#" method="post">
                <fieldset>
                  <legend>Quick Search:</legend>
                  <input type="text" placeholder="Enter search term&hellip;" />
                  <button type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </section> */}
        <div id="pageintro" class="hoc clear">
          <article>
            <p>Tech Gems brings to you:</p>
            <h3 class="heading">A DECNTRALIZED DONATION PLATFORM</h3>
            <p>REPAY YOUR SOCIAL DEBT BY BRINGING SMILES</p>
            <footer>
              <a
                class="btn"
                href="https://www.cafonline.org/my-personal-giving/long-term-giving/resource-centre/five-reasons-to-give-to-charity"
                target="_blank"
              >
                Why Donate
              </a>
            </footer>
          </article>
        </div>
      </div>
      <div class="wrapper row3 bg-gradient-to-tl from-stone-900 to-stone-600 ">
        {/* style={{ backgroundColor: "#917464" }}  */}
        <main class="hoc  container clear">
          <section id="introblocks">
            <div className="flex justify-center flex-wrap mt-[20px] gap-[26px]">
              {isLoading && (
                <img
                  src={loader}
                  alt="loader"
                  className="w-[100px] h-[100px] object-contain"
                />
              )}

              {!isLoading && campaigns.length === 0 && (
                <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                  You have not created any campigns yet
                </p>
              )}

              {!isLoading &&
                campaigns.length > 0 &&
                campaigns
                  .slice(0)
                  .reverse()
                  .map((campaign) =>
                    campaign.amountCollected >= campaign.target
                      ? ""
                      : (actcapm++,
                        (
                          <FundCard
                            key={campaign.id}
                            {...campaign}
                            handleClick={() => handleNavigate(campaign)}
                          />
                        ))
                  )}
            </div>
          </section>
          <div class="clear"></div>
        </main>
      </div>
      <div class="wrapper row3">
        <section class="hoc container clear ">
          <div class="sectiontitle">
            <h6 class="heading text-[42px] hover:text-[46px]">
              IMPACT THAT WE HAVE MADE
            </h6>
            <p class="nospace font-xs">AND COUNTING..</p>
          </div>
          <ul id="stats" class="nospace group">
            <li>
              <i class="fas">{campaigns.length}</i>
              <p>
                <a href="#">Total Campaigns</a>
              </p>
            </li>
            <li>
              <i class="fas">{actcapm}</i>
              <p>
                <a href="#">ACTIVE CAMPAIGNS</a>
              </p>
            </li>
            <li>
              <i class="fas">{campaigns.length - actcapm}</i>
              <p>
                <a href="#">COMPLETED CAMPAIGNS</a>
              </p>
            </li>
            <li>
              <i class="fas">♾️</i>
              <p>
                <a href="#">LIVES AFFECTED</a>
              </p>
            </li>
          </ul>
        </section>
      </div>
      <div class="wrapper row2 bg-amber-100">
        <section class="hoc container clear">
          <div class="sectiontitle underline text-[100px]">
            <p class="nospace font-xs"></p>
            <h1 class="heading text-[40px] hover:underline hover:text-[45px]">
              Our Completed Campaigns
            </h1>
          </div>

          <div className="flex justify-center flex-wrap mt-[20px] gap-[26px]">
            {isLoading && (
              <img
                src={loader}
                alt="loader"
                className="w-[100px] h-[100px] object-contain"
              />
            )}

            {!isLoading && campaigns.length === 0 && (
              <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                You have not created any campigns yet
              </p>
            )}

            {!isLoading &&
              campaigns.length > 0 &&
              campaigns
                .slice(0)
                .reverse()
                .map((campaign) =>
                  campaign.amountCollected < campaign.target ? (
                    ""
                  ) : (
                    <FundCard
                      key={campaign.id}
                      {...campaign}
                      handleClick={() => handleNavigate(campaign)}
                    />
                  )
                )}
          </div>
          {/* <ul class="nospace group center">
            <li class="one_third first">
              <article>
                <a href="#">
                  <i class="fas fa-eraser fa-5x btmspace-50"></i>
                </a>
                <h6 class="heading">Tincidunt enim etiam</h6>
                <p class="btmspace-30">
                  Tellus lacus tempor in pharetra id imperdiet sit amet enim
                  suspendisse potenti fusce ornare [&hellip;]
                </p>
                <footer>
                  <a class="btn" href="#">
                    Read More
                  </a>
                </footer>
              </article>
            </li>
            <li class="one_third">
              <article>
                <a href="#">
                  <i class="fas fa-chess-bishop fa-5x btmspace-50"></i>
                </a>
                <h6 class="heading">Congue nulla facilisi</h6>
                <p class="btmspace-30">
                  Laoreet ligula phasellus pede phasellus faucibus enim quis
                  lacus praesent ipsum vulputate [&hellip;]
                </p>
                <footer>
                  <a class="btn" href="#">
                    Read More
                  </a>
                </footer>
              </article>
            </li>
            <li class="one_third">
              <article>
                <a href="#">
                  <i class="fas fa-coins fa-5x btmspace-50"></i>
                </a>
                <h6 class="heading">Nunc congue curabitur</h6>
                <p class="btmspace-30">
                  Vitae lacinia eu interdum tempus massa in sodales purus non
                  nisi cras porta lacinia ut [&hellip;]
                </p>
                <footer>
                  <a class="btn" href="#">
                    Read More
                  </a>
                </footer>
              </article>
            </li>
          </ul> */}
        </section>
      </div>

      <div class="wrapper coloured bg-gradient-to-tl from-stone-900 to-stone-600 ">
        <section id="testimonials" class="hoc container clear">
          <div class="sectiontitle">
            <p class="nospace font-xs"></p>
            <h6 class="heading text-[50px] font-serif hover:underline hover:text-[55px] ">
              AS IT HAS BEEN SAID
            </h6>
          </div>
          <article class="one_half first hover:text-[20px]">
            <img src="images/demo/100x100.png" alt="" />
            <blockquote>
              Never respect men merely for their riches, but rather for their
              philanthropy; we do not value the sun for its height, but for its
              use
            </blockquote>
            <h6 class="heading">Gamaliel Bailey</h6>
            <em></em>
          </article>
          <article class="one_half hover:text-[20px]">
            <img src="images/demo/100x100.png" alt="" />
            <blockquote>
              Too often, a vast collection of possessions ends up possessing its
              owner.
            </blockquote>
            <h6 class="heading">Warren Buffett</h6>
            <em></em>
          </article>
        </section>
      </div>
      <div class="wrapper row3"></div>

      {/* <h1 className="font-epilogue font-semibold text-[38px] text-white text-center bg-stone-800 rounded-[20px]">
        Active Foundations ({campaigns.length})
      </h1> */}
      {/* 
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns
            .slice(0)
            .reverse()
            .map((campaign) =>
              campaign.amountCollected >= campaign.target ? (
                ""
              ) : (
                <FundCard
                  key={campaign.id}
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              )
            )}
      </div>
      <br />
      <br />
      <br />
      <h1 className="font-epilogue font-semibold text-[38px] text-white text-center bg-stone-800 rounded-[20px]">
        Completed Campaigns{" "}
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns
            .slice(0)
            .reverse()
            .map((campaign) =>
              campaign.amountCollected < campaign.target ? (
                ""
              ) : (
                <FundCard
                  key={campaign.id}
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              )
            )}
      </div> */}
    </div>
  );
};

export default DisplayCampaigns;
