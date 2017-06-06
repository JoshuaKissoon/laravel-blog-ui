import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { DataManager } from "../services/DataManager.service";
import { AlertService } from '../services/AlertService.service';

import { Post } from "./Post.model";

@Component({
    selector: "blog-posts-add",
    templateUrl: "post-form.html"
})
export class PostAddComponent
{
    private post: Post;

    constructor(private dataman: DataManager, private alerter: AlertService,
        private router: Router)
    {
        this.post = new Post();
    }

    savePost()
    {
        this.dataman.POST("api/posts", this.post).then(
            res =>
            {
                console.log(res);

                this.router.navigate(["home"]);
            }
        );
    }
}