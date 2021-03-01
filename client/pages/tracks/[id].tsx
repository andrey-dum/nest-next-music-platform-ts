import { Button, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

interface TrackPageProps {

}

const TrackPage: React.FC = () => {
    const router = useRouter()
    const track: ITrack = {   _id: '2',
        name: 'Audio 2',
        artist: 'Author Name 2',
        text: 'Text 2 ',
        listens: 0,
        audio: 'string 2',
        picture: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3e/Black_ice_red.jpg/274px-Black_ice_red.jpg',
        comments: [{_id: '1', username: 'User 2', text: 'text 2'}]
    }

    return (
        <MainLayout>
            <Button 
                onClick={() => router.push('/tracks')}
                variant={"outlined"}
                style={{fontSize: 26}}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200} />
                <div style={{marginLeft: '30px'}}>
                    <h1>Название: {track.name}</h1>
                    <h1>Исполнитель: {track.artist}</h1>
                    <h1>Прослушиваний: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField 
                    label="Ваше имя"
                    fullWidth
                    style={{marginBottom: 15}}
                />
                <TextField 
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                    style={{marginBottom: 15}}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default TrackPage
