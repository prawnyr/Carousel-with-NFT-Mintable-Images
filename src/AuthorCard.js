import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function AuthorCard({authorName}) {
    return (
        <>
        <Card className = "root" style = {{position: 'absolute', zIndex: 2, bottom:0,right:0, opacity: 0.9}}>
            <CardContent>
                <Typography style = {{fontSize: '14px'}} color = "textSecondary">
                Author Details:
                </Typography>
                <Typography variant = "h5" color = "textSecondary">
                Name: {authorName}
                </Typography>
            </CardContent>
        </Card>
        </>
    );
  }
  
  export default AuthorCard;