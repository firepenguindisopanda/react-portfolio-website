import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CertificateCard = ({ certificate }) => {
    return (
        <Card sx={{ maxWidth: 345, width: 345 }}>
            <CardMedia
                sx={{ height: 250, width: '100%', objectFit: 'cover' }}
                image={certificate.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
                        {certificate.name}
                    </div>
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {certificate.description}
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small" href={certificate.URL} target="_blank" rel="noopener noreferrer">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CertificateCard