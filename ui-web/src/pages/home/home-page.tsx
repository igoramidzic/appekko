import React, { useContext } from 'react';
import ContentLayout from '../../shared/layouts/content/content-layout';
import { IProject } from '../../core/models/project';
import MainNavbar from '../../shared/components/navs/main-navbar';
import faker from 'faker';
import { ERepositoryPlatform } from '../../core/enums/repositoryPlatforms';
import { ETechnology } from '../../core/enums/technologies';
import { EProjectCategory } from '../../core/enums/projectCategory';
import Feed from '../../shared/components/feed/feed';
import { Link } from 'react-router-dom';
import { IFeedEvent } from '../../core/models/feed';
import { EFeedEventType } from '../../core/enums/feed';
import { ROUTES } from '../../constants/routes';
import { FirebaseContext } from '../../context/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function HomePage() {



    const technologies: ETechnology[] = [ETechnology.ANGULAR, ETechnology.DOTNET, ETechnology.MONGODB, ETechnology.NODEJS, ETechnology.REACT];
    const categories: EProjectCategory[] = [EProjectCategory.SocialNetwork, EProjectCategory.Business, EProjectCategory.ECommerce]
    const platforms: ERepositoryPlatform[] = [ERepositoryPlatform.AWS, ERepositoryPlatform.BitBucket, ERepositoryPlatform.GitLab, ERepositoryPlatform.Github]

    const events: IFeedEvent[] = [];
    const projects: IProject[] = [];

    for (let i = 0; i < 10; i++) {
        let randomNum: number = faker.random.number({ min: 0, max: 10 });

        if (randomNum > 3)
            events.push({
                type: EFeedEventType.Project,
                event: {
                    name: faker.company.catchPhrase(),
                    description: faker.commerce.productDescription() + " " + faker.commerce.productDescription() + faker.commerce.productDescription() + faker.commerce.productDescription(),
                    owner: {
                        fullName: faker.name.findName(),
                        profilepicUrl: faker.internet.avatar(),
                        school: 'USF ⋅ Senior'
                    },
                    repository: {
                        platform: faker.random.arrayElement(platforms),
                        url: 'https://github.com/' + faker.internet.userName() + '/' + faker.company.bsBuzz()
                    },
                    startDate: faker.date.recent(2),
                    technologies: [faker.random.arrayElement(technologies), faker.random.arrayElement(technologies), faker.random.arrayElement(technologies)],
                    category: faker.random.arrayElement(categories)
                }
            })
        else
            events.push({
                type: EFeedEventType.Ad,
                event: {
                    name: faker.company.catchPhrase(),
                    description: faker.commerce.productDescription() + " " + faker.commerce.productDescription() + faker.commerce.productDescription() + faker.commerce.productDescription(),
                    owner: {
                        fullName: faker.name.findName(),
                        profilepicUrl: faker.internet.avatar(),
                        school: 'USF ⋅ Senior'
                    },
                }
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
                        <Feed events={events}></Feed>
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

function Profile() {
    const firebase = useContext(FirebaseContext);
    const [user] = useAuthState(firebase.auth);

    function showLogout(): boolean {
        console.log("testing", firebase.auth?.currentUser);
        return !!firebase.auth?.currentUser;
    }

    function logout(): void {
        firebase.auth.signOut();
    }

    return (
        <div>
            <Link to={ROUTES.SIGN_UP} className="btn btn-primary btn-block">Sign up</Link>

            <hr />

            <Link to={ROUTES.LOG_IN} className="btn btn-primary btn-block btn-outline">Log in</Link>

            <hr />

            {!!user && <button className="btn btn-primary btn-block" onClick={logout}>Log Out</button>}
        </div>
    )
}
