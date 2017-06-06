import { Component, OnInit } from "@angular/core";

import { DataManager } from "../services/DataManager.service";

@Component({
    selector: "blog-posts-all",
    templateUrl: "posts-view-all.html"
})
export class PostsViewAllComponent implements OnInit
{
    private posts: any[];

    constructor(private dataman: DataManager)
    {
        this.posts = new Array<any>();
    }

    ngOnInit()
    {
        this.loadPosts();
    }

    private loadPosts()
    {
        this.dataman.GET("posts").then(
            res =>
            {
                this.posts = res;
            }
        );
    }
}