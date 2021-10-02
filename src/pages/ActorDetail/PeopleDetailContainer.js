import React from 'react';
import {useQuery} from "react-query";
import {getPeopleDetail} from "../../apis/PeopleApi";
import ActorDetail from "../../components/ActorDetail";
import TopBar from "../../components/TopBar";
import {GridContainer} from "../../components/GridContainer";
import {Grid} from "@material-ui/core";
import Menubar from "../../components/Menubar";

const PeopleDetailContainer = (props) => {

    const peopleDetail = useQuery(['peopleDetail', props.match.params['peopleId']],
        () => getPeopleDetail.api(props.match.params['peopleId']), {
            keepPreviousData: true
        });

    if (peopleDetail.isLoading) {
        return null
    }
    return (
        <div>
            <TopBar/>
            <GridContainer container justifyContent="center">
                <Grid item xs={3}>
                    <Menubar/>
                </Grid>

                <Grid item xs={8}>
                    <ActorDetail peopleDetail={peopleDetail.data}/>
                </Grid>

                <Grid item xs={1}/>


            </GridContainer>
        </div>
    );
};

export default PeopleDetailContainer;