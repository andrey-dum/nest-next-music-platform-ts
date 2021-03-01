import { Box, Button, Card, Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {   _id: '1',
            name: 'Audio 1',
            artist: 'Author Name',
            text: 'Text ',
            listens: 0,
            audio: 'string',
            picture: 'asflfsaasfasf',
            comments: [{_id: '1', username: 'user', text: 'text'}]
        },
        {   _id: '2',
            name: 'Audio 2',
            artist: 'Author Name 2',
            text: 'Text 2 ',
            listens: 0,
            audio: 'string 2',
            picture: 'asflfsaasfasf 2',
            comments: [{_id: '1', username: 'User 2', text: 'text 2'}]
        },
    ]

    return (
        <MainLayout>
           <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={2}>
                        <Grid container justifyContent='space-between'>
                            <h1> Tracks</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
           </Grid>
        </MainLayout>
    )
}

export default Index
