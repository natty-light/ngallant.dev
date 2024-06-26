'use client';

import { FC } from 'react';
import projects from '@/data/projects.json';
import { Grid, Stack, Typography } from '@mui/material';
import Project from '@/components/Project';
import colors from '@/colors';
import PageContainer from '@/components/Containers/PageContainer';

const Projects: FC = () => {
    return (
        <PageContainer>
            <Stack alignItems="center" width="100%" gap={8}>
                <Typography
                    variant="h1"
                    color={colors.accent}
                    padding="8px 0px"
                >
                    projects
                </Typography>
                <Grid container width="80%">
                    {projects.map((project) => (
                        <Grid item key={project.title}>
                            <Project
                                title={project.title}
                                text={project.text}
                                buttonText={project.buttonText}
                                buttonIcon={project.buttonIcon}
                                link={project.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </PageContainer>
    );
};

export default Projects;
