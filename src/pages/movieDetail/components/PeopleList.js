import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";

const PeopleList = (props) => {
    console.log(props.actorList);
    return (
        <div>
            {props.actorList?.map((actor,i) => (
                <Card key={i}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {actor.peoplenm}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

        </div>
    );
};

export default PeopleList;