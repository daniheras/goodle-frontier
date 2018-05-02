import React from 'react';
import Card from "material-ui/es/Card/Card";
import {
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "material-ui";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "material-ui/es/Button/Button";

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const CourseCard = props => {
    return (
        <div style={{padding: '.5rem'}}>
            <Card style={styles.card}>
                <CardHeader
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.name}
                    subheader={props.category}
                />
                <CardMedia
                    style={styles.media}
                    image={props.image}
                    title={props.name + ' image'}
                />
                <CardContent>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Enter
                    </Button>
                </CardActions>
            </Card>
        </div>

    );
}

export default CourseCard;