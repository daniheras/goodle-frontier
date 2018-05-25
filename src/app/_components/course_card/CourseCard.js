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
import {Link} from "react-router-dom";

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
        <div style={{padding: '1rem 0'}}>
            <Card style={styles.card}>
                <CardHeader
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.course.name}
                    subheader={props.course.category}
                />
                <CardMedia
                    style={styles.media}
                    image={props.course.picture+props.course.id}
                    title={props.course.name + ' image'}
                />
                <CardContent>
                    <Typography component="p">
                        {props.course.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={'/app/course/'+props.course.id}>
                        <Button size="small" color="primary">
                            Enter
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>

    );
}

export default CourseCard;