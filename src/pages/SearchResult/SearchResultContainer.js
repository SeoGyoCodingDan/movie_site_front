import React, {useEffect} from 'react';
import TopBar from "../../components/TopBar";
import {Grid, Typography} from "@material-ui/core";
import Menubar from "../../components/Menubar";
import {GridContainer} from "../../components/GridContainer";
import {useInfiniteQuery, useQuery} from "react-query";
import {findMovieListByName} from "../../apis/MovieApi";
import MovieCardList from "../../components/MovieCardList";
import {useInView} from "react-intersection-observer";

const SearchResultContainer = (props) => {
    const {ref, inView} = useInView();
    const searchList = useQuery(['searchList', props.match.params['keyword']],
        () => findMovieListByName.api(1, 8, props.match.params['keyword']),)

    useEffect(() => {
        fetchNextResult().then((res) => {
            console.log(res)
            console.log('페이징 아이템')
        }).catch(e => {
            console.log(e)
        });
    }, [inView])

    const {
        data: useResultListQuery,
        fetchNextPage: fetchNextResult,
    } = useInfiniteQuery(
        ['userReviewList', props.match.params['keyword']],
        ({
             pageParam = {
                 pageNum: 1,
                 pageSize: 8,
             },
         }) =>
            findMovieListByName.api(pageParam.pageNum, pageParam.pageSize, props.match.params['keyword']),
        {
            keepPreviousData: true,
            getNextPageParam: lastPage => {
                console.log(lastPage)
                if (lastPage?.data.next === null) {
                    console.log('마지막 페이지 없음')
                    return undefined;
                }
                return {
                    pageNum: (lastPage?.config?.params.page + 1),
                    pageSize: 8,
                };
            },
        },
    );

    console.log(searchList);
    return (
        <div>
            <TopBar keyword={props.match.params['keyword']}/>
            <GridContainer container justifyContent="center">
                <Grid item xs={3}>
                    <Menubar/>
                </Grid>

                <Grid item xs={8} style={{marginBottom: '60px'}}>
                    <Typography color={'secondary'} variant={'h5'} component={'h5'}
                                style={{marginTop: '20px', fontWeight: 700}}>
                        RESULTS
                    </Typography>
                    {useResultListQuery?.pages.map((group, i) => (
                        <div key={i}>
                            <MovieCardList movieList={group.data?.results} inViewRef={ref}/>
                        </div>
                    ))}
                </Grid>

                <Grid item xs={1}/>
            </GridContainer>
        </div>
    );
};

export default SearchResultContainer;