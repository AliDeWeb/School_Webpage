// Types
import article from "../../types/articles";

// Components
import { Header, Footer } from "../../configs/layout";

// React Router
import { Link, useParams } from "react-router-dom";

// Imgs
import profileImg from "../../assets/imgs/icons/unknown-profile.svg";

// React Icons
import { FaLessThan } from "react-icons/fa6";

// React Query
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Axios
import { baseUrl, articles, gallery } from "../../configs/axios";

const Article = () => {
  const { articleId } = useParams();
  const queryClient = useQueryClient();

  const { data: article, isLoading: isArticleLoading } = useQuery({
    queryKey: [`Article-[${articleId}]`],
    queryFn: async () => {
      const artilceInfo = await articles.get(`/${articleId}`, {
        method: "GET",
      });

      return artilceInfo?.data;
    },
    refetchInterval: 20 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 1 * 60 * 60 * 1000,
  });
  const { data: news, isLoading: isNewsLoading } = useQuery({
    queryKey: ["News"],
    queryFn: async () => {
      const events = await articles.get("/news", {
        method: "GET",
      });

      return events?.data;
    },
    initialData: queryClient.getQueryData(["News"]),
    refetchInterval: 2 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000,
  });
  const { data: galleryImgs, isLoading: isGalleryImgsLoading } = useQuery({
    queryKey: ["GalleryImgs"],
    queryFn: async () => {
      const galleryData = await gallery.get("/?limit=15", {
        method: "GET",
      });

      return galleryData?.data;
    },
    initialData: queryClient.getQueryData(["GalleryImgs"]),
    refetchInterval: 2 * 60 * 1000,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <>
      <Header />
      <main className={"py-12"}>
        <div>
          <div className="container">
            <div className={"grid grid-cols-6 gap-6"}>
              <article className={"col-span-6 lg:col-span-4"}>
                <h1
                  className={"font-danaBold text-xl md:text-3xl line-clamp-2"}
                >
                  {!isArticleLoading && article.data.article.title}
                </h1>
                <div className={"mt-4 flex items-center gap-2"}>
                  <div className={"size-14"}>
                    <img src={profileImg} alt="profile" />
                  </div>
                  <div className={"flex flex-col"}>
                    <span className={"font-dana text-base md:text-lg"}>
                      {!isArticleLoading &&
                        `${article.data.article.author.name} ${article.data.article.author.lastName}`}
                    </span>
                    <span className={"font-dana text-sm flex items-center"}>
                      مقاله نوشته شده در:{"  "}
                      <span className={"font-danaBold ltr mr-2"} dir={"ltr"}>
                        {!isArticleLoading &&
                          article.data.article.createdAtJalali
                            .split(" ")
                            .reverse()
                            .join("/")}
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  className={
                    "mt-8 rounded-xl overflow-hidden shadow-lg w-full max-h-96"
                  }
                >
                  {!isArticleLoading && (
                    <img
                      className={"object-contain"}
                      src={`${baseUrl}/${article.data.article.image}`}
                      alt="Article-Img"
                    />
                  )}
                </div>
                <div className={"mt-6"}>
                  <p className={"font-dana leading-10"}>
                    {!isArticleLoading && article.data.article.article}
                  </p>
                </div>
              </article>
              <aside className={"col-span-6 lg:col-span-2 lg:mt-0 mt-6"}>
                <div className={"sticky top-[120px]"}>
                  <div className={"flex flex-col gap-8"}>
                    {!isGalleryImgsLoading &&
                      !!galleryImgs?.data?.gallery.length && (
                        <div
                          className={
                            "border border-solid border-[#f1b163]/30 py-3 px-4 rounded-2xl"
                          }
                        >
                          <div
                            className={
                              "font-dana flex items-center justify-between"
                            }
                          >
                            <h3 className={"text-lg"}>اخرین تصاویر</h3>
                            <Link
                              to="/"
                              className={
                                "flex items-center justify-center gap-1 font-dana text-sm text-[#f09f3e]"
                              }
                            >
                              مشاهده همه
                              <FaLessThan size={"0.6em"} />
                            </Link>
                          </div>
                          <div
                            className={
                              "flex flex-col gap-2 mt-6 divide-y divide-solid divide-gray-400/20"
                            }
                          >
                            {galleryImgs.data.gallery.map((el: any) => (
                              <div
                                key={el._id}
                                className={"flex items-center gap-2 p-2"}
                              >
                                <div
                                  className={
                                    "overflow-hidden rounded-full size-12"
                                  }
                                >
                                  <img
                                    src={`${baseUrl}/${el.image}`}
                                    alt="img"
                                  />
                                </div>
                                <div>
                                  <h4
                                    className={
                                      "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                                    }
                                  >
                                    <Link to={"/"}>{el.title}</Link>
                                  </h4>
                                  <p
                                    className={
                                      "text-sm font-dana line-clamp-1 max-w-[150px]"
                                    }
                                  >
                                    {el.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {!isNewsLoading && news?.data?.news?.length && (
                      <div
                        className={
                          "border border-solid border-[#f1b163]/30 py-3 px-4 rounded-2xl"
                        }
                      >
                        <div
                          className={
                            "font-dana flex items-center justify-between"
                          }
                        >
                          <h3 className={"text-lg"}>اخرین اخبار</h3>
                          <Link
                            to="/"
                            className={
                              "flex items-center justify-center gap-1 font-dana text-sm text-[#f09f3e]"
                            }
                          >
                            مشاهده همه
                            <FaLessThan size={"0.6em"} />
                          </Link>
                        </div>
                        <div
                          className={
                            "flex flex-col gap-2 mt-6 divide-y divide-solid divide-gray-400/20"
                          }
                        >
                          {news.data.news.map((el: article) => (
                            <div key={el._id} className={"p-2"}>
                              <div>
                                <h4
                                  className={
                                    "font-dana line-clamp-1 scale-100 hover:scale-105 hover:pr-2 transition-all"
                                  }
                                >
                                  <Link to={`/article/${el._id}`}>
                                    {el.title}
                                  </Link>
                                </h4>
                                <p className={"text-sm font-dana line-clamp-1"}>
                                  {el.article}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Article;
