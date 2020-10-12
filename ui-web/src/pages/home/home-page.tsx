import React from 'react';
import ContentLayout from '../../shared/layouts/content/content-layout';
import { ERepositoryPlatform, IProject, EProjectCategory, ETechnology } from '../../core/models/project';
import Project from '../../shared/components/projects/project/project';
import MainNavbar from '../../shared/components/navs/main-navbar';
import faker from 'faker';

export default function HomePage() {
    const technologies: ETechnology[] = [ETechnology.ANGULAR, ETechnology.DOTNET, ETechnology.MONGODB, ETechnology.NODEJS, ETechnology.REACT];

    const categories: EProjectCategory[] = [EProjectCategory.SocialNetwork, EProjectCategory.Business, EProjectCategory.ECommerce]

    const projects: IProject[] = [];

    for (let i = 0; i < 20; i++) {
        projects.push({
            name: faker.company.catchPhrase(),
            description: faker.commerce.productDescription() + " " + faker.commerce.productDescription() + faker.commerce.productDescription() + faker.commerce.productDescription(),
            owner: {
                fullName: faker.name.findName(),
                profilepicUrl: faker.internet.avatar(),
                school: 'USF ⋅ Senior'
            },
            repository: {
                platform: ERepositoryPlatform.Github,
                url: 'https://github.com/igoramidzic/appekko'
            },
            startDate: faker.date.recent(2),
            technologies: [faker.random.arrayElement(technologies)],
            category: faker.random.arrayElement(categories)
        })
    }

    projects.sort((a, b) => a.startDate < b.startDate ? 1 : -1);

    return (
        <ContentLayout>
            <div className="content-width container-fluid">
                <div className="mb-4">
                    <MainNavbar></MainNavbar>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <Profile></Profile>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Projects projects={projects}></Projects>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                Filter
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}


function Projects(props: { projects: IProject[] }) {

    return (
        <div>
            {props.projects.map((value, index) => {
                return <div className="mb-2" key={index}><Project project={value}></Project></div>
            })}
        </div>
    )
}

function Profile() {
    return (
        <div>
            Profile
        </div>
    )
}
